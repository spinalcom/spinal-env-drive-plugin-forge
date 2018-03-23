/**
 * SpinalDrive_App_FileExplorer_export_svf
 * @extends {SpinalDrive_App}
 */
class SpinalDrive_App_FileExplorer_export_svf extends SpinalDrive_App {

  /**
   * Creates an instance of SpinalDrive_App_FileExplorer_export_svf.
   * @memberof SpinalDrive_App_FileExplorer_export_svf
   */
  constructor() {
    super("exportSvfFileExplorer", "Create Digital Twin", 6, "dvr", "Create Digital Twin");
    this.order_priority = 5;
  }
  /**
   * method to handle the selection
   * 
   * @param {any} element 
   * @memberof SpinalDrive_App_FileExplorer_export_svf
   */
  action(obj) {
    let mdToast = obj.scope.injector.get('$mdToast');
    if (obj && obj.file && obj.file.name) {
      let message = 'Starting to Export  "' + obj.file.name + '" to svf';
      mdToast.showSimple(message);
      let filename = obj.file.name.replace(/\.[^/.]+$/, "");
      console.log(filename);
      console.log(obj);
      let curr_dir = obj.scope.curr_dir;
      if (curr_dir) {
        let base_filename = filename.replace(/\([\d]*\)/g, "");
        let x = 0;
        while (curr_dir.has(filename)) {
          filename = base_filename + '(' + x + ')';
          x++;
        }
        let f = FileSystem._objects[obj.file._server_id];
        if (f) {
          console.log(f);
          f.load((m) => {
            console.log(m);
            let ext = /(?:\.([^.]+))?$/.exec(obj.file.name)[1];
            curr_dir.add_file(filename, 0, {
              model_type: 'Digital twin',
              rvt: new Ptr(m),
              ext: ext
            });
          });
        }
      }
    }
  }

  /**
   * method to know if the app is needed to be shown.
   * @param {Object} d node of the tree selectionned
   * @returns {boolean}
   * @memberof SpinalDrive_App_FileExplorer_export_svf
   */
  is_shown(d) {
    if (d && d.file && d.file._server_id) {
      let file = FileSystem._objects[d.file._server_id];
      if (file) {
        if (file instanceof File) {
          if (file._info.model_type && file._info.model_type.get() === 'Path') {
            let ext = /(?:\.([^.]+))?$/.exec(file.name.get())[1];
            let known_ext = ['3DM', '3DS', 'ASM', 'CATPART', 'CATPRODUCT', 'CGR', 'COLLABORATION', 'DAE', 'DGN', 'DLV3', 'DWF', 'DWFX', 'DWG',
              'DWT', 'DXF', 'EMODE', 'EXP', 'F2D', 'F3D', 'FBX', 'G', 'GBXML', 'GLB', 'GLTF', 'IAM', 'IDW', 'IFC', 'IGE', 'IGES', 'IGS', 'IPT',
              'IWM', 'JT', 'MAX', 'MODEL', 'NEU', 'NWC', 'NWD', 'OBJ', 'PDF', 'PMLPRJ', 'PMLPRJZ', 'PRT', 'PSMODEL', 'RCP', 'RVT', 'SAB', 'SAT',
              'SESSION', 'SKP', 'SLDASM', 'SLDPRT', 'STE', 'STEP', 'STL', 'STLA', 'STLB', 'STP', 'STPZ', 'WIRE', 'X_B', 'X_T', 'XAS', 'XPR', 'ZIP'
            ];
            for (let i = 0; i < known_ext.length; i++) {
              if (ext.toUpperCase() === known_ext[i].toUpperCase())
                return true;
            }
          }
        }
      }
    }
    return false;
  }

}

module.exports.FileExplorerExportSvf = SpinalDrive_App_FileExplorer_export_svf;
/**
 * SpinalDrive_App_FileExplorer_svf_viewer
 * @extends {SpinalDrive_App}
 */
class SpinalDrive_App_FileExplorer_svf_viewer extends SpinalDrive_App {

  /**
   * Creates an instance of SpinalDrive_App_FileExplorer_svf_viewer.
   * @memberof SpinalDrive_App_FileExplorer_svf_viewer
   */
  constructor() {
    super("OpenSvfFileExplorer", "Open with BIM Viewer", 6, "location_city", "Open the BIM Viewer");
    this.order_priority = 5;
  }
  /**
   * method to handle the selection
   * 
   * @param {any} element 
   * @memberof SpinalDrive_App_FileExplorer_svf_viewer
   */
  action(obj) {

    let authService = obj.scope.injector.get('authService');
    let fs_path = obj.scope.fs_path;
    let username = authService.get_user().username;
    let path = "/__users__/" + username;
    for (var i = 1; i < fs_path.length; i++) {
      path += '/' + fs_path[i].name;
    }
    path += '/' + obj.file.name;
    let myWindow = window.open('', '');
    let location = "/html/viewer-annotations/index.html#!/viewer/" + btoa(path);
    myWindow.document.location = location;
    myWindow.focus();
  }

  /**
   * method to know if the app is needed to be shown.
   * @param {Object} d node of the tree selectionned
   * @returns {boolean}
   * @memberof SpinalDrive_App_FileExplorer_svf_viewer
   */
  is_shown(d) {
    if (d && d.file && d.file._server_id) {
      let file = FileSystem._objects[d.file._server_id];
      if (file && file instanceof File && file._info.model_type &&
        file._info.model_type.get() === 'BIM Project') {
        return true;
      }
    }
    return false;
  }

}

module.exports.FileExplorerSvfViewer = SpinalDrive_App_FileExplorer_svf_viewer;
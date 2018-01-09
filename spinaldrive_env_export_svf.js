(function () {
  var SpinalDrive_App_FileExplorer_export_svf = require('./ExportSvf/SpinalDrive_App_export_svf.js').FileExplorerExportSvf;
  spinalDrive_Env.add_applications('FileExplorer', new SpinalDrive_App_FileExplorer_export_svf());
  // spinalDrive_Env.context_file_exp_app_icon.Svf = "location_city";
  spinalDrive_Env.context_file_exp_app_icon["BIM Project"] = "location_city";
})();
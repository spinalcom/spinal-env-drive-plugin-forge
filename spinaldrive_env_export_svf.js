(function() {
  require("spinal-env-drive-core");
  var SpinalDrive_App_FileExplorer_export_svf = require("./ExportSvf/SpinalDrive_App_export_svf.js")
    .FileExplorerExportSvf;
  window.spinalDrive_Env.add_applications(
    "FileExplorer",
    new SpinalDrive_App_FileExplorer_export_svf()
  );
  window.spinalDrive_Env.context_file_exp_app_icon["BIM Project"] =
    "location_city";
})();

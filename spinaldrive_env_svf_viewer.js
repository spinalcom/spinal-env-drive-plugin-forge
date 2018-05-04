(function() {
  require("spinal-env-drive-core");

  var SpinalDrive_App_FileExplorer_svf_viewer = require("./ExportSvf/SpinalDrive_App_svf_viewer.js")
    .FileExplorerSvfViewer;
  window.spinalDrive_Env.add_applications(
    "FileExplorer",
    new SpinalDrive_App_FileExplorer_svf_viewer()
  );
  var SpinalDrive_App_FileExplorer_export_svf = require("./ExportSvf/SpinalDrive_App_export_svf.js")
    .FileExplorerExportSvf;
  window.spinalDrive_Env.add_applications(
    "FileExplorer",
    new SpinalDrive_App_FileExplorer_export_svf()
  );
})();

// Function to show AR model
function showAR(modelUrl) {
    const viewer = document.querySelector('#ar-viewer');
    
	// Set the GLB file URL
	viewer.src = modelUrl; 
	
	// Activate AR mode
	viewer.activateAR();   
}

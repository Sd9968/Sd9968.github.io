<!-- Link to external JavaScript -->
<script>
    // Function to show AR model
    function showAR(modelUrl) {
        const viewer = document.querySelector('#ar-viewer');
        viewer.setAttribute('scale', '0.5 0.5 0.5'); // Adjust size
        viewer.src = modelUrl;
        viewer.activateAR();
    }
</script>
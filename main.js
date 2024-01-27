document.addEventListener("DOMContentLoaded", function () {
    let draggedItem = null;

    function dragStart(event) {
        draggedItem = event.target;
        event.dataTransfer.setData("text/plain", "");
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const dropZone = document.getElementById("dropZone");

        if (event.target.classList.contains("draggable")) {
            return;
        }

        if (draggedItem) {
            event.target.appendChild(draggedItem.cloneNode(true));
            draggedItem.parentNode.removeChild(draggedItem);
            draggedItem = null;
        }
    }

    document.addEventListener("dragstart", dragStart);
    document.addEventListener("dragover", dragOver);
    document.addEventListener("drop", drop);
});

document.addEventListener('DOMContentLoaded', () => {
    Build();
});

function Build() {
    console.log("TEST2");

    //const dropzone = document.getElementById('dropzone');
    const input = document.getElementById('input');
    console.log("HI");
    /*// Prevent default browser behavior for file drag/drop across the window
    ['dragover', 'drop'].forEach(ev => {
        window.addEventListener(ev, e => e.preventDefault());
    });

    // Visual feedback
    ['dragenter','dragover'].forEach(evt =>
        dropzone.addEventListener(evt, e => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        })
    );
    ['dragleave','drop'].forEach(evt =>
        dropzone.addEventListener(evt, e => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
        })
    );*/

    // Add "Selected" class to each file-listing when one is clicked
    var fileListings = document.getElementsByClassName('file-listing');
    for (let i = 0; i < fileListings.length; i++) {
        fileListings[i].addEventListener('click', function() {

            for (let j = 0; j < fileListings.length; j++) {
                fileListings[j].classList.remove('selected');
            }
            this.classList.add('selected');

            // log
            console.log('Selected file:', this.textContent);
        });
    }
}
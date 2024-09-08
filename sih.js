document.addEventListener('DOMContentLoaded', () => {
    const sectorSelect = document.getElementById('sector');
    const documentSections = {
        ayurveda: document.getElementById('ayurveda-docs'),
        yoga: document.getElementById('yoga-docs'),
        naturopathy: document.getElementById('naturopathy-docs'),
        unani: document.getElementById('unani-docs'),
        siddha: document.getElementById('siddha-docs'),
        homeopathy: document.getElementById('homeopathy-docs')
    };
    const generalDocs = document.getElementById('general-docs');

    sectorSelect.addEventListener('change', () => {
        // Hide all document sections
        Object.values(documentSections).forEach(section => section.classList.add('hidden'));

        // Show the selected sector's document section
        const selectedSector = sectorSelect.value;
        if (documentSections[selectedSector]) {
            documentSections[selectedSector].classList.remove('hidden');
        }

        // Always show general documents
        generalDocs.classList.remove('hidden');
    });
});

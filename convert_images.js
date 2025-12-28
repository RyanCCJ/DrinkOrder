const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'menu');
const outputDir = path.join(__dirname, 'base64');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (file === '.DS_Store') return;

        const ext = path.extname(file).toLowerCase();
        let mimeType = 'image/jpeg'; // Default
        if (ext === '.png') {
            mimeType = 'image/png';
        } else if (ext === '.jpg' || ext === '.jpeg') {
            mimeType = 'image/jpeg';
        } else {
            console.log(`Skipping file with unknown extension: ${file}`);
            return;
        }

        const filePath = path.join(inputDir, file);
        const fileData = fs.readFileSync(filePath);
        const base64String = fileData.toString('base64');
        const dataUri = `data:${mimeType};base64,${base64String}`;

        const outputFileName = file + '.txt';
        const outputFilePath = path.join(outputDir, outputFileName);

        fs.writeFileSync(outputFilePath, dataUri);
        console.log(`Converted ${file} to ${outputFileName}`);
    });
});

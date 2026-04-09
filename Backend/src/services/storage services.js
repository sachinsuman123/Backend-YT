const Imagekit = require('@imagekit/nodejs');


const imagekit = new Imagekit({
    privateKey : "private_x2vFRJSeZuY4oXQH7TBKWhYljnM=", 
});

async function uploadfile(buffer) {

    console.log(buffer);

    const result = await imagekit.files.upload({
        file : buffer.toString('base64'),
        fileName : `image-${Date.now()}.jpg`,
    }); 
    
    if (!result || !result.url) {
        throw new Error('Failed to get image URL from ImageKit');
    }
    
    return result;
}

 module.exports = uploadfile;   
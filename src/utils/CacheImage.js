export default function CacheImage(url){
    const createPromise = () => {
        const img = new window.Image();
        img.src = url;

        return new Promise((resolve, reject) => {
            img.addEventListener('load', () => { resolve(img) })
            img.addEventListener('error', reject)
        });
    }

    if(Array.isArray(url)){
        return Promise.all(url.map(item => createPromise(item)));
    }else{
        return createPromise(url);
    }
}
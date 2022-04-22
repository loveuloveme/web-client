function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.values(images);
}

const images = importAll(require.context('../../assets/img', false, /\.(png|jpe?g|svg|gif)$/));

export default function Preload() {
    return (
        <div>
            {images.map((item, index) => <img src={item.default} style={{ display: 'none' }} key={index} />)}
        </div>
    );
}
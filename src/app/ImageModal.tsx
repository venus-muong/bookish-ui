function ImageModal({ importImages, setImportImages }) {
    console.log('in image modal', importImages);
    return (
        <>
        <div style={{position: 'fixed', top: '30%', backgroundColor: 'white', borderRadius: '1rem', borderStyle: 'solid', borderColor: 'gray', width: '40rem', height: '18rem'}}>
            <p onClick={() => setImportImages(false)} style={{textAlign: 'center', color:'black'}}>Import Images</p>
            <div style={{borderWidth: '0.1rem', marginLeft: '5rem', marginBottom: '1rem', width: '30rem', height: '10rem', borderRadius: '1rem', borderStyle:'solid', borderColor: 'gray'}}>

            </div>
            <input type='text' style={{width: '30rem', marginLeft: '5rem'}}/>
        </div>
      </>
    )
}

export default ImageModal;
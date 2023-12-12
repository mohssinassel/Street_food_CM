export default function CustomImage({imgsrc, pt}) {
    return(
        <div className="custom-image" style={{paddingTop: pt}}>
          <img src={imgsrc} alt="" />  
        </div>
    )
}
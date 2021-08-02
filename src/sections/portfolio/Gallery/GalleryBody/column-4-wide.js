import React,{useEffect,useState} from "react"
import Link from "../../../../components/Link"
import Card from '../components/CardTwo'

import images from './isotope';


const TagButton = ({ name, handleSetTag, tagActive,children }) => {
	return (
		<button className={`tag btn-reset ${tagActive === name? 'active' : ""}`} onClick={() => handleSetTag(name)}>
			{children}
		</button>
	);
};

export default function GalleryBody() {

  const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tagi === tag));
		},
		[tag]
	);

  return <>
   <div className="portfolio-section" id="portfolio-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 portfolio-navbar">
        <ul className="nav isotope-nav justify-content-center" id="isotope-mas-filters">
          <li className="nav-item">
            <TagButton name="all" tagActive={tag} handleSetTag={setTag} >
              ALL WORKS
            </TagButton> 
          </li>
          <li className="nav-item">
          <TagButton name="branding" tagActive={tag} handleSetTag={setTag} >
              BRANDING
          </TagButton>
          </li>
           <li className="nav-item">
           <TagButton name="ux" tagActive={tag} handleSetTag={setTag}  >
            UX DESIGN
          </TagButton>
           </li>
          <li className="nav-item">
          <TagButton name="photography" tagActive={tag} handleSetTag={setTag}>
            PHOTOGRAPHY
          </TagButton>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="iso-mas-grid-wrap row">
        {filteredImages.map(({image,id,tagi}) => (
						<div className={`col-xl-3 col-lg-4 col-md-6  col-sm-6 gr-pb-7  ${tagi === tag | tag === "all" ?  "is-animated" :""} `}  key={id}>
            <Card image={image}/>
          </div>
					))}
          
          
        </div>
      </div>
      <div className="col-12 text-center portfolio-load-btn nogap-btn-margin">
        <Link to="/" className="btn focus-reset">Load more works</Link>
      </div>
    </div>
  </div>
</div>

</>
}

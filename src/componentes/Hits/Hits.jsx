import { Highlight } from "react-instantsearch";
import { Link } from "react-router-dom";
const Hit = (props) => {
  console.log(props)
  return (
    <div className="mb-4">
      <Link to={`/detail/${props.hit.objectID}`}>
        <img alt={props.hit.title} src={props.hit.img}  className="w-full h-auto"></img>
        <div className="title mt-2">
          <Highlight
            attribute="title"
            hit={props.hit}
            tagName="mark"
            nonHughlightedTagName="span"
          ></Highlight>
        </div>
        <div className="price text-lg font-bold mt-1">${props.hit.price}</div>
      </Link>
       <button
        className="snipcart-add-item mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        data-item-id={props.hit.objectID}
        data-item-price="23"
        data-item-description={props.hit.description}
        data-item-image={props.hit.img}
        data-item-url= "/"
        
      >
        Add to cart
      </button>
    </div>
  );
};

export default Hit;

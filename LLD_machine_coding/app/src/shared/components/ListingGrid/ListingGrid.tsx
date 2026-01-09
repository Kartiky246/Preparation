import Card from "../Card/Card";
import "./ListingGrid.css";
import WithLoader from "../WithLoader";

function ListingGrid({data}:{data:any}) {
    return (
        <div className="listing-grid">
            {data.map((v: any)=> <Card key={v.id} cardData={v}></Card>)}
        </div>
    )
}

export default  WithLoader({Element: ListingGrid, url: 'https://dummyjson.com/products'});
import FetchList from '../hooks/FetchData'

function WithLoader({Element, url}: {Element: any, url: string}) {
  return (props: any) => {
        const data = FetchList({url});
        if (!data.length){
            return <span>Loading ...</span>
        }
        return <Element {...props} data={data} ></Element>
  } 
}
export default WithLoader;

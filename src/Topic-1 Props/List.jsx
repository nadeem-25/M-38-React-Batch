
const List = (props)=>{
    console.log("props:",props)
  return <>
        <h2>a:{props.a}</h2>
        <h2>Username:{props.user}</h2>
        <h2>Msg:{props.msg}</h2>
  </>
}

export default List;
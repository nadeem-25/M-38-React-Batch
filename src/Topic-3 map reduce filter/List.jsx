

const List = (props) => {
    const {username,index} = props;
    return <li key={index}>Username: {username}</li>
}

export default List;
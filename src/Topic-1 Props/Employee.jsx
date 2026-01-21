/**
 * 
 props =  { 
    user : {
               username:"Tinku", 
               skills: ["frontend","backend"],
               designation: "SDE-2",
               salary:"12.5 LPA"
            }
 }


  props = {
               username:"Tinku", 
               skills: ["frontend","backend"],
               designation: "SDE-2",
               salary:"12.5 LPA"
            }

            Object.values()
 */

const Employee = (props) => {
  // console.log("props:",props);
  // const {user} = props;
  // const {username,skills, designation, salary} = user;

  const entries = Object.entries(props);
  console.log("entries:", entries);
  //  values = ['Tinku', Array(2), 'SDE-2', '12.5 LPA']

  return (
    <>
      <h1>Employee Component</h1>
      {entries.map(([k, v]) => (
        <h2>
          {k}-{v}
        </h2>
      ))}
    </>
  );
};

export default Employee;

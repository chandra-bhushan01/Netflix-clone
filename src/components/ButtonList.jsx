import Button from "./Button"
const ButtonList = () => {

    const items= ["all","cooking", "gaming", 'live', "songs",'concerts',' sports']

    

  return (  
    <div className="flex">
      {items.map((value, index) => (
        <Button key={index} name={value} />
      ))}
    </div>
  );
}

export default ButtonList
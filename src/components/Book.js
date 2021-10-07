function Book(props) {

  // if (!props.title){
  //   return (
  //   <article>
  //     <p>No information</p>
  //   </article>)
  // };
  const author = props.author || <strong>Pesho</strong>;
  //ako nqma avtor varni =>

  return (
    <article  >
      <h3 onClick={props.clickHandler}> {props.title ? <i>{props.title}</i> : <i>'No title'</i>} </h3>
      <p>{props.description || "Default description"}</p>
      <p>{author}</p>
      
    </article>
  );

  //{props.description || "Default description"}или ako e falsi shte varne drugoto
  //{props.description ?? "Default description"} ако е празен стринг или 0 6te gi pokaje
      // ako e null undefined shte pokaje  Default description
      //{props.description && "Default description"}
      //ako tova e true pokaji Default description obratno na || ili
}

export default Book;

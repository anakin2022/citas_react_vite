function Header(props) {
    /* el parametro props te da acceso a todos los props
      tambien puedes colocar el parametro directo props que quieres acceder
      tambien puedes colocar props separados por coma: 
      Ejemplo: function Header({numeros, isAdmin}) {
    */

    //console.log(`props desde Header: ${props}!`)
    //console.log("props desde Header:", props);
    console.log(props)

    return (

        <div>
            <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">Seguimiento pacientes {''} Con Github {''}<span className="text-indigo-600">Veterinaria</span></h1>

        </div>

    )
}

export default Header;

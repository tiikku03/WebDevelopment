/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
      username: "Andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];
  
  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mas el cafe que el te",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];

  const userPasword = "123"
  const userName = "Andres"

  usersDatabase.forEach(user =>
  {
    if (user.username === userName && user.password === userPasword){
        console.log("Bienvenido a tu bandeja de entrada")
        usersTimeline.forEach(usertime =>
        {
            if (usertime.username == userName){
                console.log(usertime.timeline)
            }
        }
            
        )
    }
    else {
        console.log("este no es tu usuario o contraseña")
      }
  }
  
  )

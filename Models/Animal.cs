using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EjerciciosJavaScript.Models
{
    public class Animal
    {
        public string nombre { get; set; }
        public int cantidad { get; set; }

        public Animal(string nombre, int cantidad)
        {
            this.nombre = nombre;
            this.cantidad = cantidad;
        }
    }
}
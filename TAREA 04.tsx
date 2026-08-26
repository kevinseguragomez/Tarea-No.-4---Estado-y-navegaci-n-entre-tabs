import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InicioScreen from "./screens/InicioScreen";
import EstudiantesScreen from "./screens/EstudiantesScreen";
import EstadisticasScreen from "./screens/EstadisticasScreen";

interface Estudiante {
  id: number;
  nombre: string;
  carrera: string;
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    {
      id: 1,
      nombre: "Kevin Segura",
      carrera: "Ingeniería en Sistemas",
    },
    {
      id: 2,
      nombre: "Ana López",
      carrera: "Ingeniería en Sistemas",
    },
    {
      id: 3,
      nombre: "Carlos Pérez",
      carrera: "Ingeniería en Sistemas",
    },
    {
      id: 4,
      nombre: "María García",
      carrera: "Ingeniería en Sistemas",
    },
  ]);

  const agregarEstudiante = () => {
    const nuevoEstudiante: Estudiante = {
      id: estudiantes.length + 1,
      nombre: `Estudiante ${estudiantes.length + 1}`,
      carrera: "Ingeniería en Sistemas",
    };

    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  useEffect(() => {
    console.log(
      "La cantidad de estudiantes cambió:",
      estudiantes.length
    );
  }, [estudiantes]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={InicioScreen} />

        <Tab.Screen name="Estudiantes">
          {() => (
            <EstudiantesScreen
              estudiantes={estudiantes}
              agregarEstudiante={agregarEstudiante}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Estadísticas">
          {() => (
            <EstadisticasScreen
              cantidadEstudiantes={estudiantes.length}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

# Semana 9 — Día 1 (lunes)

```text
📅 Día: Semana 9 — Día 1
⏱️ Duración prevista: 4 h 22 min
📚 Objetivo: Qué resuelve la capa de enlace y cómo direcciona
🛠️ Práctica: Las direcciones MAC de tu propio equipo
```

---

## De qué va hoy

El Mes 2 dejó los bits viajando por el cable. Hoy empieza el problema siguiente: **ese medio lo
comparten varios equipos, y un bit no lleva escrito a quién va**.

La capa de enlace es la que resuelve eso. No es una capa más: es la que convierte un chorro de bits
en un mensaje con remitente, destinatario y comprobación de integridad.

Hoy se ve **qué problemas resuelve**, **cómo se reparte el trabajo** entre sus dos subcapas y, sobre
todo, **cómo identifica a cada equipo**. Las direcciones MAC ya las viste en el Mes 1; hoy se leen
hasta el último bit.

---

## Objetivos concretos

- Enumerar los cinco problemas que la capa de enlace hereda del diseño de cualquier red.
- Explicar por qué se divide en **LLC** y **MAC**, y qué hace cada una.
- Leer una dirección MAC completa: OUI, identificador y los bits **I/G** y **U/L**.
- Distinguir **unicast**, **multicast** y **difusión** sin más dato que la propia dirección.
- Explicar por qué la MAC vale **para un salto** y la IP para todo el trayecto.

---

## Orden de la sesión

| Bloque | Tiempo | Material |
|---|---:|---|
| 🧠 Repaso: la MAC del Mes 1 y la encapsulación | 18 min | [Mes 1 · S2 · D1](../../../Mes_01_Fundamentos/Semana_02/Dia_01/teoria.html) |
| 📖 Teoría con paradas de escritura | 62 min | [teoria.html](teoria.html) |
| 🃏 Flashcards | 12 min | En la misma página |
| ❓ Quiz cronometrado | 20 min | Al final de la teoría |
| 🛠️ Ejercicios | 72 min | [ejercicios.html](ejercicios.html) |
| 💻 Laboratorio: las MAC de tu equipo | 62 min | [laboratorio.html](laboratorio.html) |
| 🧾 Cierre | 16 min | — |
| | **262 min** | **4 h 22 min** |

---

## Lo que hace falta

- Un **terminal**: PowerShell en Windows o cualquiera en Linux. Nada que instalar.
- Si tienes **WSL, Docker o VirtualBox**, mejor: el laboratorio saca partido de sus adaptadores
  virtuales, que enseñan algo que los físicos no pueden.

---

## Cierre de sesión

Al terminar, anota:

- Las tres direcciones MAC de tu equipo y qué tipo es cada una.
- Un ejemplo propio de dirección multicast y cómo la reconociste.
- La diferencia entre el ámbito de la MAC y el de la IP, con tus palabras.

**Qué reforzar si algo ha quedado flojo**: los bits I/G y U/L, que vuelven en la Semana 11 al hablar
de seguridad de puertos, y el ámbito de salto, que es la base del Mes 6.

---

## Lo que viene mañana

**Día 2 — La trama.** Si hoy se ha visto a quién va el mensaje, mañana se ve **cómo se empaqueta**:
los campos de la trama Ethernet, dónde empieza y dónde acaba, y cómo se detecta que ha llegado rota.

---

[🏠 Centro de Aprendizaje](../../../web_interactiva/index.html) · [Índice de la semana](../README.md) · [Teoría →](teoria.html)

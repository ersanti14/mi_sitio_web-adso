#Suponiendo que pi = 3.1416. Escribe un programa que pida al usuario que introduzca el radio, y presente por pantalla el cálculo del perímetro de la circunferencia (2*pi*r), el área del círculo (pi*r2 ), y el volumen de la esfera (V = 4*pi*r3 /3).

pi = 3.1416
radio = int(input("Ingrese el radio de la circunsferencia: "))

perimetro = (2*pi*radio)
area = pi*radio**2
volumen = 4*pi*radio**3/3

print('El perimetro de la circunsferencia es de',perimetro,', el area del circulo es de',area,'y el volumen de la esfera es de',volumen)
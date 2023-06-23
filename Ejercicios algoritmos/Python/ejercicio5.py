# Escribe un programa que pregunte al usuario los dos lados de un rectángulo y presente por pantalla el cálculo del perímetro (suma de los lados) y el área (base por altura).

base = int(input("Ingrese la base del rectangulo: "))
altura = int(input("Ingrese la altura del rectangulo: "))

perimetro = (base*2) + (altura*2)
area = base*altura

print('El perímetro del rectángulo es de ',perimetro, ' y su area es de ',area)

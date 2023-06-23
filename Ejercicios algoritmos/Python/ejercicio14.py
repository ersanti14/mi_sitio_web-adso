#Se tienen un cultivo de café, de los cuales con el uso de la tecnología se recolectan los siguientes datos para análisis de suelo:
#PH (Acidez del suelo) rango adecuado entre 5 y 5.5.
#Materia orgánica mayor a 8
#Fosforo (P) mayor a 30
#Calcio (Ca) mayor a 3
#Magnesio (Mg) mayor a 0.9
#Potasio (K) mayor a 0.4
#Aluminio (Al) menor a 1
#Acorde a los datos recolectados identificar si el suelo es apto para la siembra cafe

ph = float(input("Ingrese el ph del suelo: "))
materia = float(input("Ingrese la materia orgánica: "))
fosforo = float(input("Ingrese el fosforo: "))
calcio = float(input("Ingrese el calcio: "))
magnesio = float(input("Ingrese el magnesio: "))
potasio = float(input("Ingrese el potasio: "))
aluminio = float(input("Ingrese el aluminio"))

if ph > 5 and materia > 8 and fosforo > 30 and calcio > 3 and magnesio > 0.9 and potasio > 0.4 and aluminio < 1:
    print('El suelo es apto para la siembra de café')
else:
    print('El suelo no es apto para la siembra de café')
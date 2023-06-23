# Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20, el programa dirá que el precio final con descuento es de 240

precio = int(input("Ingrese el precio de su compra: "))
descuento = int(input("Ingrese el descuento adquirido: "))

total = precio-(precio*descuento)/100

print('El precio de la compra aplicando el descuento es de' ,total)
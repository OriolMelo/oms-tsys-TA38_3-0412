export class Objeto {
    private codigo: number;
    private descripcion: string;
    private precio: number;

    constructor(codigo:number=0, descripcion:string ="", precio:number=0){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;
    }

    getCodigo(): number{
        return this.codigo;
    }

    setCodigo(codigo: number): void{
        this.codigo = codigo;
    }

    getDescripcion(): string{
        return this.descripcion;
    }

    setDescripcion(descripcion: string): void{
        this.descripcion = descripcion;
    }

    getPrecio(): number{
        return this.precio;
    }

    setPrecio(precio: number): void{
        this.precio = precio;
    }
}

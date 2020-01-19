import { Pipe, PipeTransform } from "@angular/core"


@Pipe({
    name: 'capitalize'
})


export class CapitalizePipe implements PipeTransform{

    transform ( key : string = null) {

        if ( key !== null ){

            key = key.substring(0, 1).toUpperCase() + key.substring(1, key.length)
            return key

        }
    }

}


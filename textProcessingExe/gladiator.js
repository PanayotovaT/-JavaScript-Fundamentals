function solve(input) {

    let inventory = input.shift().split(' ');
    
    for(let line of input) {

        let[command, equipment] = line.split(' ')
        
        if(command == 'Buy') {
            if(index(inventory, equipment) == -1) {
                inventory.push(equipment);
            }

        } else if (command == 'Trash') {
            if(index(inventory, equipment) !== -1) {
                inventory.splice(index(inventory, equipment), 1);
            }

        } else if( command == 'Repair') {
            if(index(inventory, equipment) !== -1) {
                let repaired = inventory.splice(index(inventory, equipment), 1);
                inventory.push(repaired);
            }

        } else if (command == 'Upgrade') {
           let [ equip, upgrade] = equipment.split('-');
           let index = inventory.indexOf(equip);
           if(index !== -1) {
               inventory.splice((index + 1), 0 , `${equip}:${upgrade}`)
           }
           
        }
    }
    console.log(inventory.join(' '));
    function index(i, x) {
     let index = i.indexOf(x);
     return index;
    }

}
solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])
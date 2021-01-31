function solve(input) {
    input = input.split(' ');

    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    }
    let junkMaterials = {}

    for (let i = 0; i < input.length - 1; i++) {

        let quantity = Number(input[i]);
        let material = input[++i].toLowerCase();

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250) {
                let legendary = ''
                keyMaterials[material] -= 250;

                if (material == 'shards') {
                    legendary = 'Shadowmourne';
                } else if (material == 'fragments') {
                    legendary = 'Valanyr';
                } else if (material == 'motes') {
                    legendary = 'Dragonwrath';
                }

                console.log(`${legendary} obtained!`);
                break;
            }
        } else {
            if (!junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] = 0;
            }
            junkMaterials[material] += quantity
        }
    }

    Object.keys(keyMaterials)
        .sort((a, b) => (keyMaterials[b] - keyMaterials[a]) || a.localeCompare(b))
        .forEach(x => console.log(`${x}: ${keyMaterials[x]}`));

    Object.keys(junkMaterials)
        .sort((a, b) => a.localeCompare(b))
        .forEach(x => console.log(`${x}: ${junkMaterials[x]}`))


}
// solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
function connector(){
    graph.addVertex('0', {
        '1': weight(data.features[0].geometry["coordinates"], data.features[1].geometry["coordinates"]),
        '2': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
        '3': weight(data.features[0].geometry["coordinates"], data.features[3].geometry["coordinates"])
    });
    graph.addVertex('1', {
        '4': weight(data.features[1].geometry["coordinates"], data.features[4].geometry["coordinates"])
    });
    graph.addVertex('2', {
        '5': weight(data.features[2].geometry["coordinates"], data.features[5].geometry["coordinates"])
    });
    graph.addVertex('3', {
        '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"]),
        '5': weight(data.features[3].geometry["coordinates"], data.features[5].geometry["coordinates"]),
        '6': weight(data.features[3].geometry["coordinates"], data.features[6].geometry["coordinates"])
    });
    graph.addVertex('4', {
        '7': weight(data.features[4].geometry["coordinates"], data.features[7].geometry["coordinates"])
    });
    graph.addVertex('5');
    graph.addVertex('6', {
        '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"])
    });
    graph.addVertex('7', {
        '8': weight(data.features[7].geometry["coordinates"], data.features[8].geometry["coordinates"]),
        '9': weight(data.features[7].geometry["coordinates"], data.features[9].geometry["coordinates"])
    });
    graph.addVertex('8', {
        '11': weight(data.features[8].geometry["coordinates"], data.features[11].geometry["coordinates"])
    });
    graph.addVertex('9', {
        '10': weight(data.features[9].geometry["coordinates"], data.features[10].geometry["coordinates"])
    });
    graph.addVertex('10', {
        '12': weight(data.features[10].geometry["coordinates"], data.features[12].geometry["coordinates"])
    });
    graph.addVertex('11')
    graph.addVertex('12', {
        '13': weight(data.features[12].geometry["coordinates"], data.features[13].geometry["coordinates"])
    });
    graph.addVertex('13', {
        '14': weight(data.features[13].geometry["coordinates"], data.features[14].geometry["coordinates"]),
        '15': weight(data.features[13].geometry["coordinates"], data.features[15].geometry["coordinates"]),
        '16': weight(data.features[13].geometry["coordinates"], data.features[16].geometry["coordinates"]),
        '18': weight(data.features[13].geometry["coordinates"], data.features[18].geometry["coordinates"])
    });
    graph.addVertex('14')
    graph.addVertex('15', {
        '16': weight(data.features[15].geometry["coordinates"], data.features[16].geometry["coordinates"])
    });
    graph.addVertex('16', {
        '17': weight(data.features[16].geometry["coordinates"], data.features[17].geometry["coordinates"])
    });
    graph.addVertex('17')
    graph.addVertex('18', {
        '19': weight(data.features[18].geometry["coordinates"], data.features[19].geometry["coordinates"])
    });
    graph.addVertex('19', {
        '20': weight(data.features[19].geometry["coordinates"], data.features[20].geometry["coordinates"])
    });
    graph.addVertex('20', {
        '21': weight(data.features[20].geometry["coordinates"], data.features[21].geometry["coordinates"]),
        '22': weight(data.features[20].geometry["coordinates"], data.features[22].geometry["coordinates"])
    });
    graph.addVertex('21')
    graph.addVertex('22', {
        '23': weight(data.features[22].geometry["coordinates"], data.features[23].geometry["coordinates"])
    });
    graph.addVertex('23', {
        '24': weight(data.features[23].geometry["coordinates"], data.features[24].geometry["coordinates"])
    });
    graph.addVertex('24', {
        '25': weight(data.features[24].geometry["coordinates"], data.features[25].geometry["coordinates"])
    });
    graph.addVertex('25', {
        '26': weight(data.features[25].geometry["coordinates"], data.features[26].geometry["coordinates"])
    });
    graph.addVertex('26', {
        '27': weight(data.features[26].geometry["coordinates"], data.features[27].geometry["coordinates"])
    });
    graph.addVertex('27', {
        '28': weight(data.features[27].geometry["coordinates"], data.features[28].geometry["coordinates"]),
        '29': weight(data.features[27].geometry["coordinates"], data.features[29].geometry["coordinates"])
    });
    graph.addVertex('28')
    graph.addVertex('29', {
        '30': weight(data.features[29].geometry["coordinates"], data.features[30].geometry["coordinates"]),
        '31': weight(data.features[29].geometry["coordinates"], data.features[31].geometry["coordinates"])
    });
    graph.addVertex('30')
    graph.addVertex('31', {
        '32': weight(data.features[31].geometry["coordinates"], data.features[32].geometry["coordinates"])
    });
    graph.addVertex('32', {
        '33': weight(data.features[32].geometry["coordinates"], data.features[33].geometry["coordinates"]),
        '34': weight(data.features[32].geometry["coordinates"], data.features[34].geometry["coordinates"])
    });
    graph.addVertex('33')
    graph.addVertex('34', {
        '35': weight(data.features[34].geometry["coordinates"], data.features[35].geometry["coordinates"]),
        '36': weight(data.features[34].geometry["coordinates"], data.features[36].geometry["coordinates"])
    });
    graph.addVertex('35')
    graph.addVertex('36', {
        '37': weight(data.features[36].geometry["coordinates"], data.features[37].geometry["coordinates"]),
        '38': weight(data.features[36].geometry["coordinates"], data.features[38].geometry["coordinates"])
    });
    graph.addVertex('37')
    graph.addVertex('38', {
        '39': weight(data.features[38].geometry["coordinates"], data.features[39].geometry["coordinates"])
    });
    graph.addVertex('39', {
        '40': weight(data.features[39].geometry["coordinates"], data.features[40].geometry["coordinates"]),
        '41': weight(data.features[39].geometry["coordinates"], data.features[41].geometry["coordinates"])
    });
    graph.addVertex('40')
    graph.addVertex('41', {
        '42': weight(data.features[41].geometry["coordinates"], data.features[42].geometry["coordinates"]),
        '43': weight(data.features[41].geometry["coordinates"], data.features[43].geometry["coordinates"])
    });
    graph.addVertex('42');
    graph.addVertex('43');
}
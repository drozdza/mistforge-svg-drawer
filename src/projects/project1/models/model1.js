{
    Styles:{
        _default: {
            Groups:{
                Qmode: 'addToParent',
            },
            Shapes:{
                fillColor: 'none',
            }
        },

    }
    Groups:{
        'gropa1': {
            P:'_e_hook',   // ParentL '_external_hook'
            R:0, Q:0,      // Radius, Angle
        },
        'grupa2': {
            P:'grupa1',
            Qmode: 'addToPosition',
            R:100, Q:-30,
        },
        'grupa3': {
            P:'grupa2',
            R:100, Q:30,
        }
    },
    Points:{
        glut4:{},
        0:{G:'grupa1', R:90, Q:30},
        1:{G:'grupa1', R:50, Q:60},
        2:{G:'grupa1', R:90, Q:-30},
        3:{G:'grupa1', R:50, Q:-60},
        4:{},
        5:{},
        6:{},
        7:{},
        8:{},
        9:{},
        10:{},
        11:{},
        glut2:{},
        12:{},
        17:{},
        21:{},
        37:{},
        glut1:{},
        glut3:{},
    },
    Shapes:{
        0:{
            P:[
                ['M',0,'L',1,'L',2,'L',3,'L',0,'z'],
                ['M',0,'Q',1,2,3],
            ],
            strokeWidth: 3,
            strokeColor: 'red',
            fillColor: 'none',
        },
    },
    Images:{

    },
}

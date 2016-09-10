{
    Styles:{
        _default: {
            Groups:{
                Qmode: 'addToParent',
            },
            Shapes:{
                strokeWidth: 1,
                strokeColor: 'black',
                fillColor: 'none',
            }
        },
        reddish: {
            Shapes:{
                strokeColor: 'red',
                fillColor: 'red',
                fillOpacity: 0.3,
            }
        }

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
        glut:{G:'grupa1', R:50, Q:-60},
    },
    Shapes:{
        0:{
            P:[
                [0,'L',1,'L',2,'L','glut','L',0,'z'],
                [0,'Q',1,2,'glut'],
            ],
            strokeWidth: 3,
            strokeColor: 'red',
        },
        one:{
            P:[
                [1,'L',2,'L',3,'L',1,'z']
            ],
            Styles:['reddish'],

        }
    },
    Images:{

    },
}

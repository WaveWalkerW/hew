
function myFunction(x) {
    if (x.matches) {
        console.log('ne')
        document.getElementById('egor').style.rotate = '90deg'
        document.getElementById('dilnaz').style.rotate = '90deg'
        const btn = document.getElementById('baton');
        const ter = document.getElementById('rotate');
        const suka = document.getElementById('balya');
        suka.style.display = 'none'

        btn.style.width = '200px'
        btn.style.height = '100px'
        btn.style.marginTop = '100%'
        btn.style.marginLeft = '47%'
        btn.style.rotate = '90deg'
        btn.style.fontSize = '20pt'
        btn.addEventListener('click', () => {
            console.log('click')
            btn.style.display = 'none'; 
            ter.style.display = 'none';
            const rot = document.getElementById('open-rot');
            rot.style.display = 'none';
            const egorka = document.getElementById('egor');
            const dil = document.getElementById('dilnaz');
            const egorRightHand = document.getElementById('e-right-hand');
            const text = document.getElementById('text-egor');
            const dilLeftLeg = document.getElementById('d-left-leg');
            const dilRightLeg = document.getElementById('d-right-leg');
            const dilRightHand = document.getElementById('d-right-hand');
            const dilLeftHand = document.getElementById('d-left-hand');
            const dilHead = document.getElementById('d-head');
            const dilTors = document.getElementById('d-tors');
                        // LINA

                        const lin = document.getElementById('lina');
                        const fuu = document.getElementById('otvet');
                        
                        // ANEL
                        
                        const ma = document.getElementById('mda')
                        const ana = document.getElementById('anel'); 
                        
            egorka.style.marginLeft = '-70%'
            dil.style.marginLeft = '-80%'
            dil.style.marginTop = '30%'
            egorka.style.display = 'flex';

            dilTors.style.marginTop = '15%'

            lin.style.display = 'flex';
            ana.style.display = 'flex';


            

            lin.style.marginTop = '130%'
            lin.style.rotate = '90deg'
            lin.style.marginLeft = '30%'
            fuu.style.marginLeft = '0%'
            fuu.style.marginTop = '-40%'

            ana.style.marginTop = '142%'
            ana.style.rotate = '90deg'
            ana.style.marginLeft = '23%'
            ma.style.marginLeft = '40%'
            ma.style.marginTop = '-30%'

            document.getElementById('e-head').style.marginTop = '5%'
            document.getElementById('e-head').style.marginLeft = '11%'
            document.getElementById('e-tors').style.marginLeft = '5%'
            document.getElementById('e-right-hand').style.marginLeft = '25%'
            document.getElementById('e-right-hand').style.marginTop = '10%'
            document.getElementById('e-left-hand').style.marginLeft = '5.5%'
            document.getElementById('e-left-hand').style.marginTop = '17%'
            document.getElementById('d-head').style.marginTop = '7%'
            document.getElementById('d-left-hand').style.marginTop = '18%'
            document.getElementById('d-left-hand').style.marginLeft = '45%'
            document.getElementById('d-right-hand').style.marginTop = '18%'
            document.getElementById('d-right-hand').style.marginLeft = '61%'
            document.getElementById('d-right-leg').style.marginLeft = '57%'

            dil.style.display = 'flex';
            text.style.marginTop = '-4%'
            text.style.marginLeft = '23%'
            
            setTimeout(() => {
                dil.style.marginLeft = '-80%'
                dil.style.marginTop = '-10%'
                setTimeout(() => {
                    dilLeftLeg.style.rotate = '-90deg'
                    dilRightLeg.style.rotate = '-90deg'
                    
                    dilLeftLeg.style.marginTop = '40%'
                    dilLeftLeg.style.marginLeft = '35%'
                    
                    dilRightLeg.style.marginLeft = '32%'
                    dilRightLeg.style.marginTop = '36%'
                    dilHead.style.marginTop = '25%'
                    dilHead.style.marginLeft = '22.5%'
                    
                    dilLeftHand.style.marginTop = '35%'
                    dilLeftHand.style.marginLeft = '18%'
                    
                    dilRightHand.style.marginTop = '34%'
                    dilRightHand.style.marginLeft = '32%'
        
                    dilTors.style.marginTop = '33%'
                    dilTors.style.marginLeft = '22%'
                    dil.style.marginLeft = '-80%'
                    dil.style.marginTop = '-10%'

                    lin.style.opacity = '100';
                    ana.style.opacity = '100';
                    ma.style.opacity = '100';
                    fuu.style.opacity = '100';
                    const openRot = document.getElementById('open-rot');
                    const rot = document.getElementById('dil-rot');

                    setTimeout(() => {
                        setInterval(() => {
                            console.log('open')
                            rot.style.display = 'none';
                            openRot.style.display = 'flex';
                            setInterval(() => {
                                console.log('close')
                                openRot.style.display = 'none';
                                rot.style.display = 'flex';
                            }, 5000)
                        },5000)
                    },500)
                },4750)
            },500)
        
        
            setTimeout(() => {
                text.style.opacity = '100'

                setTimeout(() => {
                    egorRightHand.style.rotate = "-45deg"
                    egorRightHand.style.marginLeft = '12%'
        
                }, 500)
            }, 5000)
        })
    }
    else {
        console.log(window.innerWidth);
        console.log('da')
        const rot = document.getElementById('open-rot');
        const btn = document.getElementById('baton'); 
        btn.style.display = 'none'; 
        rot.style.display = 'none';
        addEventListener('click', () => {
            console.log('none')
            
            const suka = document.getElementById('balya');

            // EGOR
            
            const egorka = document.getElementById('egor');
            const egorRightHand = document.getElementById('e-right-hand');
            const text = document.getElementById('text-egor');
            
            // DILNAZ
            
            const dil = document.getElementById('dilnaz');
            const dilLeftLeg = document.getElementById('d-left-leg');
            const dilRightLeg = document.getElementById('d-right-leg');
            const dilRightHand = document.getElementById('d-right-hand');
            const dilLeftHand = document.getElementById('d-left-hand');
            const dilHead = document.getElementById('d-head');
            const dilTors = document.getElementById('d-tors');
            const openRot = document.getElementById('open-rot');
            const rot = document.getElementById('dil-rot');
            
            // LINA

            const lin = document.getElementById('lina');
            const fuu = document.getElementById('otvet');
            
            // ANEL
            
            const ma = document.getElementById('mda')
            const ana = document.getElementById('anel'); 
            
            lin.style.display = 'flex';
            ana.style.display = 'flex';
            openRot.style.display = 'none';
            suka.style.display = 'none';
            egorka.style.display = 'flex';
            dil.style.display = 'flex';
            text.style.display = 'flex';
        
            setTimeout(() => {
                dil.style.marginLeft = '-20%'
                setTimeout(() => {
                    dilLeftLeg.style.rotate = '-90deg'
                    dilRightLeg.style.rotate = '-90deg'
                    
                    dilLeftLeg.style.marginTop = '36%'
                    
                    dilRightLeg.style.marginTop = '36%'
                    dil            
                    dilHead.style.marginTop = '29%'
                    dilHead.style.marginLeft = '42.5%'
                    
                    dilLeftHand.style.marginTop = '34.3%'
                    dilLeftHand.style.marginLeft = '40%'
                    
                    dilRightHand.style.marginTop = '34.5%'
                    dilRightHand.style.marginLeft = '48%'
        
                    dilTors.style.marginTop = '33%'
                    dilTors.style.marginLeft = '42%'
                    
                    lin.style.opacity = '100';
                    ana.style.opacity = '100';

                    fuu.style.opacity = '100';
                    ma.style.opacity = '100';
                    setTimeout(() => {
                        setInterval(() => {
                            console.log('open')
                            rot.style.display = 'none';
                            openRot.style.display = 'flex';
                            setInterval(() => {
                                console.log('close')
                                openRot.style.display = 'none';
                                rot.style.display = 'flex';
                            }, 5000)
                        },5000)
                    },500)
                },4750)
            },500)
        
        
            setTimeout(() => {
                text.style.opacity = '100';
                setTimeout(() => {
                    egorRightHand.style.rotate = "-45deg"
                    egorRightHand.style.marginLeft = '12%'
        
                }, 500)
            }, 5000)
        })
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1000px)")
// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});

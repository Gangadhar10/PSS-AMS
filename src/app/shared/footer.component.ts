import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ams-footer',
    template: `<footer class="sticky-footer">
                     <section class="footer-bg">
                     <div class="container-fluid text-center">
                        Prysmian Group. All rights reserved. Copyright © 2018.
                    </div>
                    </section>
                  </footer>`,
})
export class footerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './message.component';
import * as i3 from './message.service';
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%]{\n    display: inline-block;\n    font-style: italic;\n    font-size: 12px;\n    width: 80%;\n    }\n    .config[_ngcontent-%COMP%]{\n        display: inline-block;\n        text-align:right;\n        font-size: 12px;\n        width: 19%;\n    }'];
export const RenderType_MessageComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_MessageComponent,data:{}});
function View_MessageComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),7,'div',[['class',
      'config']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(2,0,(null as any),
          (null as any),1,'a',([] as any[]),(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onEdit()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Edit'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(5,0,(null as any),
          (null as any),1,'a',([] as any[]),(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onDelete()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Delete'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        ']))],(null as any),(null as any));
}
export function View_MessageComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),13,'article',[['class',
      'panel panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(2,
      0,(null as any),(null as any),1,'div',[['class','panel-body']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(3,
      (null as any),['\n        ','\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵeld(5,0,(null as any),(null as any),7,'footer',[['class','panel-footer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(7,0,(null as any),
          (null as any),1,'div',[['class','author']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(8,(null as any),['\n            ',
          '\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MessageComponent_1)),
      i0.ɵdid(11,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_2:any = _co.belongsToUser();
    _ck(_v,11,0,currVal_2);
  },(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_0:any = _co.message.content;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = _co.message.username;
    _ck(_v,8,0,currVal_1);
  });
}
export function View_MessageComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-message',
      ([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,
      RenderType_MessageComponent)),i0.ɵdid(1,49152,(null as any),0,i2.MessageComponent,
      [i3.MessageService],(null as any),(null as any))],(null as any),(null as any));
}
export const MessageComponentNgFactory:i0.ComponentFactory<i2.MessageComponent> = i0.ɵccf('app-message',
    i2.MessageComponent,View_MessageComponent_Host_0,{message:'message'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcGVhcnNvbmQvRG9jdW1lbnRzL0FuZ3VsYXIvdWRlbXktY291cnNlcy9tZWFuLXN0YWNrL3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3BlYXJzb25kL0RvY3VtZW50cy9Bbmd1bGFyL3VkZW15LWNvdXJzZXMvbWVhbi1zdGFjay9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3BlYXJzb25kL0RvY3VtZW50cy9Bbmd1bGFyL3VkZW15LWNvdXJzZXMvbWVhbi1zdGFjay9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcGVhcnNvbmQvRG9jdW1lbnRzL0FuZ3VsYXIvdWRlbXktY291cnNlcy9tZWFuLXN0YWNrL3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzLk1lc3NhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAge3ttZXNzYWdlLmNvbnRlbnR9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICB7e21lc3NhZ2UudXNlcm5hbWV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIiAqbmdJZj1cImJlbG9uZ3NUb1VzZXIoKVwiPlxyXG4gICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG48L2FydGljbGU+IiwiPGFwcC1tZXNzYWdlPjwvYXBwLW1lc3NhZ2U+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNRUTtNQUFBO01BQTRDLHNEQUN4QztVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUc7Y0FBQTtjQUFBO1lBQUE7WUFBSDtVQUFBLGdDQUFzQjtNQUFRLHNEQUM5QjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUc7Y0FBQTtjQUFBO1lBQUE7WUFBSDtVQUFBLGdDQUF3QjtNQUFVOzs7b0JBVjlDO01BQUE7TUFBQSxnQkFBcUMsOENBQ2pDO01BQUE7TUFBQSwwREFBd0I7TUFBQSx3Q0FFbEI7TUFDTjtVQUFBO01BQTZCLGtEQUN6QjtVQUFBO1VBQUEsOEJBQW9CO1VBQUEsZ0JBRWQsa0RBQ047aUJBQUE7YUFBQTtVQUFBLGlDQUdNO01BQ0Q7O0lBSmU7SUFBcEIsWUFBb0IsU0FBcEI7OztJQVBvQjtJQUFBO0lBSUE7SUFBQTs7OztvQkNMNUI7TUFBQTtpQ0FBQSxVQUFBO01BQUE7OzsifQ==
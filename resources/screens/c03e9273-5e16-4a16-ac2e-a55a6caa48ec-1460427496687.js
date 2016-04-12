jQuery("#simulation")
  .on("click", ".s-c03e9273-5e16-4a16-ac2e-a55a6caa48ec .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-siguiente-btn")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7d065dfd-fc24-4dc3-8c67-60354f906654"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-c03e9273-5e16-4a16-ac2e-a55a6caa48ec .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-drag-scrollbar")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-drag-scrollbar",
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-c03e9273-5e16-4a16-ac2e-a55a6caa48ec .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-c03e9273-5e16-4a16-ac2e-a55a6caa48ec .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });
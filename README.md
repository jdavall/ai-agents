# Church Event Planner

A simple browser-based planner for organizing church events through the year.

This planner can be handed off to future coordinators by sharing the app files plus a saved planner JSON file.

## What It Includes

- Preloaded church-year events such as Advent, Christmas, Lent, Easter, VBS, Youth Sunday, and Harvest Fellowship
- Editable event details for date, coordinator, ministry area, budget, theme, and notes
- An in-page `Add Event` form for creating new events without browser prompts
- A `Save Updates` button at the end of the event form for a clear finished-editing action
- Checklist tracking for planning progress
- Volunteer and supply list fields
- `New Planner`, `Open Planner`, and `Save Planner As` actions for sharing planner files
- `Print Planner` and `Print Event` actions for paper copies or meeting handouts
- Local browser storage so your updates remain after refresh

## How To Use

1. Open `index.html` in your browser.
2. Select an event from the left side.
3. Update the planning details on the right.
4. Click `Add Event` to open the new-event form and create a new calendar item.
5. Use `Archive Event` when an event is completed so it moves into the archived list for future reference.
6. Use `Restore Event` on an archived event if you want to bring it back into active planning.
7. Use `Save Updates` at the end of the form when you want a clear confirmation that the current event has been saved in the browser.
8. Use `Delete Event` if you want to permanently remove an event.
9. Use `Save Planner As` to download the current planner data as a JSON file you can share or keep.
10. Use `Open Planner` to replace the current planner data with a previously saved JSON file.
11. Use `Print Planner` if you want a full paper copy of the planner.
12. Use `Print Event` inside a selected event if you want a single event handout or planning sheet.
13. Use `New Planner` to start over from the starter church-event template.
14. Your changes also auto-save in that browser as a local safety copy.
15. Use `Reset Demo Data` if you want to quickly restore the starter content.

## Event Workflow

- `Active Events` shows the events you are currently planning.
- `Archived Events` stores completed events so you can look back at what was done before.
- Archived events keep their notes, checklist progress, volunteers, supplies, and budget details.
- Deleting an event removes it from the planner after a confirmation prompt.
- `Save Updates` confirms the current event changes are stored in the browser on this computer.
- Opening a saved planner file replaces the current browser data with the contents of the selected JSON file.
- `Save Planner As` creates a portable file that can be emailed, stored in shared folders, or passed to the next coordinator.
- `Print Planner` gives a full printout of the planner, while `Print Event` focuses on the currently selected event.

## Best Option For Church Staff

If you want something that is easy to hand off to the next ministry leader, the best option right now is:

- Use the planner in the browser for everyday editing.
- Click `Save Planner As` to create a planner JSON file.
- Keep that file in one shared place such as a church office folder, shared drive, or Dropbox folder.
- When the next person takes over, have them open the planner and click `Open Planner` to load that same file.

This is the easiest setup for most churches because:

- It does not require a special server or website host.
- It is easier to explain to someone who is not technical.
- The planner file can be copied, emailed, or stored in a shared folder.
- It avoids depending only on one computer's browser memory.

## What To Watch Out For

- `Save Updates` saves changes on that computer and browser, but it is not the same as keeping a permanent shared file.
- If browser data is cleared, the local copy can be lost.
- If several planner JSON files are saved in different places, people may not know which one is the latest.
- It is best to choose one official shared folder and keep only the newest planner file there.

## Future Upgrade Options

If the church wants a more advanced setup later, these are the main options:

1. Keep the current file-based system.
This is the simplest and best choice for most small teams.

2. Use a browser feature that re-saves the same file directly.
This can feel more like a normal app, but it may only work well in some browsers such as Chrome or Edge.

3. Build a small hosted app with a server.
This is the strongest long-term option for shared use, but it takes more setup, maintenance, and technical support.

## Good Next Steps

- Add your church's actual annual calendar dates
- Replace the sample coordinators with ministry leaders from your team
- Tailor the checklist items for each event
- Add editable event titles and ministry seasons after creation

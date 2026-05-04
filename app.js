const storageKey = "church-event-planner-data-v1";

const defaultEvents = [
  {
    id: "advent",
    title: "Advent Celebration",
    archived: false,
    season: "Advent",
    date: "2026-11-29",
    coordinator: "Worship Ministry",
    category: "Worship",
    budget: "600",
    theme: "Prepare the way of the Lord",
    notes: "Plan scripture readings, candles, choir specials, and foyer decor.",
    volunteers: "Advent Readers\nChoir Team\nDecorating Team",
    supplies: "Advent wreath\nCandles\nBulletin inserts",
    checklist: [
      { label: "Confirm theme and scripture focus", done: true },
      { label: "Schedule readers and worship leaders", done: false },
      { label: "Prepare decorations and foyer welcome table", done: false },
      { label: "Promote service dates to congregation", done: true }
    ]
  },
  {
    id: "christmas",
    title: "Christmas Program",
    archived: false,
    season: "Christmas",
    date: "2026-12-20",
    coordinator: "Children's Ministry",
    category: "Family",
    budget: "1200",
    theme: "Joy to the World",
    notes: "Coordinate rehearsals early and confirm nativity costumes.",
    volunteers: "Children's Teachers\nStage Helpers\nHospitality Team",
    supplies: "Costumes\nPrograms\nRefreshments",
    checklist: [
      { label: "Choose program order and participants", done: true },
      { label: "Arrange rehearsals and sound checks", done: false },
      { label: "Organize refreshments and seating", done: false },
      { label: "Assign photographers and welcome team", done: false }
    ]
  },
  {
    id: "lent",
    title: "Lenten Prayer Gathering",
    archived: false,
    season: "Lent",
    date: "2026-02-18",
    coordinator: "Prayer Team",
    category: "Prayer",
    budget: "250",
    theme: "Return to the Lord",
    notes: "Consider weekly prayer guides and small-group reflection prompts.",
    volunteers: "Prayer Leaders\nGreeters",
    supplies: "Prayer guides\nCommunion supplies\nSignage",
    checklist: [
      { label: "Finalize prayer format and teaching plan", done: true },
      { label: "Prepare prayer guide handouts", done: false },
      { label: "Invite ministry leaders to participate", done: false },
      { label: "Set up prayer stations", done: false }
    ]
  },
  {
    id: "easter",
    title: "Easter Sunday Service",
    archived: false,
    season: "Easter",
    date: "2026-04-05",
    coordinator: "Senior Pastor",
    category: "Worship",
    budget: "1800",
    theme: "He Is Risen",
    notes: "Coordinate overflow seating, parking, and follow-up for guests.",
    volunteers: "Greeters\nParking Team\nChoir\nFollow-up Team",
    supplies: "Flower cross\nGuest cards\nCommunion elements",
    checklist: [
      { label: "Confirm sermon series and worship flow", done: true },
      { label: "Recruit extra greeters and parking team", done: true },
      { label: "Prepare guest follow-up system", done: false },
      { label: "Finalize decorations and communion setup", done: false }
    ]
  },
  {
    id: "vbs",
    title: "Vacation Bible School",
    archived: false,
    season: "Summer",
    date: "2026-07-13",
    coordinator: "Children's Director",
    category: "Outreach",
    budget: "2500",
    theme: "Faith Adventure Week",
    notes: "Track registration, classroom leaders, snacks, and security coverage.",
    volunteers: "Registration Team\nClass Leaders\nSnack Team\nSecurity Team",
    supplies: "Craft materials\nName tags\nSnacks\nDecor kits",
    checklist: [
      { label: "Open registration and collect forms", done: true },
      { label: "Assign classroom and activity leaders", done: false },
      { label: "Purchase snack and craft supplies", done: false },
      { label: "Confirm child safety and check-in process", done: false }
    ]
  },
  {
    id: "youth-sunday",
    title: "Youth Sunday",
    archived: false,
    season: "Ordinary Time",
    date: "2026-09-20",
    coordinator: "Youth Pastor",
    category: "Youth",
    budget: "400",
    theme: "Let No One Despise Your Youth",
    notes: "Include testimony slots and youth-led worship opportunities.",
    volunteers: "Youth Band\nMentors\nMedia Team",
    supplies: "Testimony outlines\nSlides\nInvitation cards",
    checklist: [
      { label: "Select youth participants and mentors", done: true },
      { label: "Plan worship set and testimonies", done: false },
      { label: "Run rehearsal with media team", done: false },
      { label: "Prepare follow-up conversation groups", done: false }
    ]
  },
  {
    id: "harvest",
    title: "Harvest Fellowship",
    archived: false,
    season: "Fall",
    date: "2026-10-17",
    coordinator: "Hospitality Team",
    category: "Fellowship",
    budget: "900",
    theme: "Gratitude and Community",
    notes: "Coordinate food signups, games, and outreach invitations.",
    volunteers: "Setup Crew\nKitchen Team\nGames Team",
    supplies: "Tables\nServing trays\nDecor\nOutdoor signs",
    checklist: [
      { label: "Confirm venue layout and schedule", done: false },
      { label: "Collect food and dessert signups", done: false },
      { label: "Prepare family activities and games", done: false },
      { label: "Invite guests and neighborhood families", done: true }
    ]
  }
];

const state = {
  events: loadEvents(),
  selectedId: null,
  printMode: "planner"
};

const eventList = document.getElementById("eventList");
const archivedEventList = document.getElementById("archivedEventList");
const eventCount = document.getElementById("eventCount");
const activeEventCount = document.getElementById("activeEventCount");
const archivedEventCount = document.getElementById("archivedEventCount");
const emptyState = document.getElementById("emptyState");
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const statusBadge = document.getElementById("statusBadge");
const saveIndicator = document.getElementById("saveIndicator");

const formElements = {
  date: document.getElementById("eventDate"),
  coordinator: document.getElementById("eventCoordinator"),
  category: document.getElementById("eventCategory"),
  budget: document.getElementById("eventBudget"),
  theme: document.getElementById("eventTheme"),
  notes: document.getElementById("eventNotes"),
  volunteers: document.getElementById("eventVolunteers"),
  supplies: document.getElementById("eventSupplies")
};

const checklistContainer = document.getElementById("checklistContainer");
const newPlannerButton = document.getElementById("newPlannerButton");
const openPlannerButton = document.getElementById("openPlannerButton");
const savePlannerButton = document.getElementById("savePlannerButton");
const printPlannerButton = document.getElementById("printPlannerButton");
const resetDataButton = document.getElementById("resetDataButton");
const importDataInput = document.getElementById("importDataInput");
const addEventButton = document.getElementById("addEventButton");
const printEventButton = document.getElementById("printEventButton");
const archiveEventButton = document.getElementById("archiveEventButton");
const restoreEventButton = document.getElementById("restoreEventButton");
const deleteEventButton = document.getElementById("deleteEventButton");
const saveUpdatesButton = document.getElementById("saveUpdatesButton");
const eventModal = document.getElementById("eventModal");
const eventModalBackdrop = document.getElementById("eventModalBackdrop");
const closeEventModalButton = document.getElementById("closeEventModalButton");
const secondaryCancelEventModalButton = document.getElementById("secondaryCancelEventModalButton");
const addEventForm = document.getElementById("addEventForm");

const newEventFields = {
  title: document.getElementById("newEventTitle"),
  season: document.getElementById("newEventSeason"),
  date: document.getElementById("newEventDate"),
  coordinator: document.getElementById("newEventCoordinator"),
  category: document.getElementById("newEventCategory"),
  budget: document.getElementById("newEventBudget"),
  theme: document.getElementById("newEventTheme"),
  notes: document.getElementById("newEventNotes")
};

function loadEvents() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return structuredClone(defaultEvents);
  }

  try {
    return sanitizeEvents(JSON.parse(raw));
  } catch {
    return structuredClone(defaultEvents);
  }
}

function saveEvents() {
  localStorage.setItem(storageKey, JSON.stringify(state.events));
  saveIndicator.textContent = `Auto-saved in this browser at ${new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  })}`;
}

function getSelectedEvent() {
  return state.events.find((event) => event.id === state.selectedId) ?? null;
}

function getProgress(event) {
  const total = event.checklist.length || 1;
  const complete = event.checklist.filter((item) => item.done).length;
  return Math.round((complete / total) * 100);
}

function getStatusLabel(progress) {
  if (progress === 100) return "Ready";
  if (progress >= 50) return "In Progress";
  return "Planning";
}

function renderEventList() {
  const activeEvents = state.events.filter((event) => !event.archived);
  const archivedEvents = state.events.filter((event) => event.archived);

  eventCount.textContent = `${state.events.length} events`;
  activeEventCount.textContent = `${activeEvents.length}`;
  archivedEventCount.textContent = `${archivedEvents.length}`;
  eventList.innerHTML = "";
  archivedEventList.innerHTML = "";

  activeEvents.forEach((event) => {
    eventList.appendChild(buildEventCard(event));
  });

  archivedEvents.forEach((event) => {
    archivedEventList.appendChild(buildEventCard(event));
  });

  if (!activeEvents.length) {
    eventList.innerHTML = '<div class="empty-list">No active events right now. Add a new one or restore an archived event.</div>';
  }

  if (!archivedEvents.length) {
    archivedEventList.innerHTML = '<div class="empty-list">Archived events will appear here after they are completed.</div>';
  }
}

function buildEventCard(event) {
    const progress = getProgress(event);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `event-card${event.id === state.selectedId ? " is-active" : ""}${event.archived ? " is-archived" : ""}`;
    button.innerHTML = `
      <div class="event-card__top">
        <div>
          <div class="event-card__title">${escapeHtml(event.title)}</div>
          <div class="event-card__season">${escapeHtml(event.season)}</div>
        </div>
        <div class="summary-pill">${event.archived ? "Archived" : getStatusLabel(progress)}</div>
      </div>
      <div class="event-card__bottom">
        <div class="event-card__meta">${formatDate(event.date)}</div>
        <div class="event-card__meta">${progress}% complete</div>
      </div>
      <div class="progress-bar" aria-hidden="true">
        <span style="width: ${progress}%"></span>
      </div>
    `;

    button.addEventListener("click", () => {
      state.selectedId = event.id;
      render();
    });

    return button;
}

function renderChecklist(event) {
  checklistContainer.innerHTML = "";

  event.checklist.forEach((item) => {
    const label = document.createElement("label");
    label.className = "checklist-item";
    label.innerHTML = `
      <input type="checkbox" ${item.done ? "checked" : ""} aria-label="${escapeHtml(item.label)}">
      <div class="checklist-item__copy">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${item.done ? "Completed" : "Still needs attention"}</span>
      </div>
    `;

    const checkbox = label.querySelector("input");
    checkbox.addEventListener("change", () => {
      item.done = checkbox.checked;
      saveEvents();
      render();
    });

    checklistContainer.appendChild(label);
  });
}

function renderDetails() {
  const event = getSelectedEvent();
  if (!event) {
    emptyState.classList.remove("hidden");
    eventForm.classList.add("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  eventForm.classList.remove("hidden");

  const progress = getProgress(event);
  eventTitle.textContent = event.title;
  statusBadge.textContent = `${event.archived ? "Archived" : getStatusLabel(progress)} | ${progress}% complete`;
  archiveEventButton.classList.toggle("hidden", event.archived);
  restoreEventButton.classList.toggle("hidden", !event.archived);

  formElements.date.value = event.date ?? "";
  formElements.coordinator.value = event.coordinator ?? "";
  formElements.category.value = event.category ?? "";
  formElements.budget.value = event.budget ?? "";
  formElements.theme.value = event.theme ?? "";
  formElements.notes.value = event.notes ?? "";
  formElements.volunteers.value = event.volunteers ?? "";
  formElements.supplies.value = event.supplies ?? "";

  renderChecklist(event);
}

function render() {
  document.body.dataset.printMode = state.printMode;
  renderEventList();
  renderDetails();
}

function updateSelectedEvent(field, value) {
  const event = getSelectedEvent();
  if (!event) return;

  event[field] = value;
  saveEvents();
  renderEventList();
  renderDetailsHeaderOnly(event);
}

function renderDetailsHeaderOnly(event) {
  const progress = getProgress(event);
  eventTitle.textContent = event.title;
  statusBadge.textContent = `${event.archived ? "Archived" : getStatusLabel(progress)} | ${progress}% complete`;
  archiveEventButton.classList.toggle("hidden", event.archived);
  restoreEventButton.classList.toggle("hidden", !event.archived);
}

function formatDate(dateString) {
  if (!dateString) return "No date set";
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createDefaultChecklist() {
  return [
    { label: "Confirm date and venue", done: false },
    { label: "Assign coordinator and ministry team", done: false },
    { label: "Prepare supplies and communications", done: false },
    { label: "Review final setup and day-of schedule", done: false }
  ];
}

function sanitizeChecklist(checklist) {
  if (!Array.isArray(checklist) || !checklist.length) {
    return createDefaultChecklist();
  }

  return checklist
    .map((item) => ({
      label: typeof item?.label === "string" && item.label.trim() ? item.label.trim() : "",
      done: Boolean(item?.done)
    }))
    .filter((item) => item.label);
}

function sanitizeEvent(event, index = 0) {
  const title = typeof event?.title === "string" && event.title.trim() ? event.title.trim() : `Imported Event ${index + 1}`;
  const fallbackId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "event"}-${Date.now()}-${index}`;
  const checklist = sanitizeChecklist(event?.checklist);

  return {
    id: typeof event?.id === "string" && event.id.trim() ? event.id.trim() : fallbackId,
    title,
    archived: Boolean(event?.archived),
    season: typeof event?.season === "string" && event.season.trim() ? event.season.trim() : "Special Event",
    date: typeof event?.date === "string" ? event.date : "",
    coordinator: typeof event?.coordinator === "string" ? event.coordinator : "",
    category: typeof event?.category === "string" ? event.category : "",
    budget: typeof event?.budget === "string" || typeof event?.budget === "number" ? String(event.budget) : "",
    theme: typeof event?.theme === "string" ? event.theme : "",
    notes: typeof event?.notes === "string" ? event.notes : "",
    volunteers: typeof event?.volunteers === "string" ? event.volunteers : "",
    supplies: typeof event?.supplies === "string" ? event.supplies : "",
    checklist: checklist.length ? checklist : createDefaultChecklist()
  };
}

function sanitizeEvents(data) {
  if (!Array.isArray(data)) {
    throw new Error("Invalid event data");
  }

  return data.map((event, index) => sanitizeEvent(event, index));
}

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function exportEvents() {
  const stamp = new Date().toISOString().slice(0, 10);
  downloadTextFile(`church-event-planner-${stamp}.json`, JSON.stringify(state.events, null, 2));
  saveIndicator.textContent = "Planner file downloaded";
}

function importEventsFromFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const importedEvents = sanitizeEvents(JSON.parse(String(reader.result)));
      state.events = importedEvents;
      state.selectedId = state.events[0]?.id ?? null;
      saveEvents();
      render();
      saveIndicator.textContent = `Opened planner with ${state.events.length} events`;
    } catch {
      window.alert("That file could not be opened. Please choose a Church Event Planner JSON file.");
    } finally {
      importDataInput.value = "";
    }
  });

  reader.addEventListener("error", () => {
    importDataInput.value = "";
    window.alert("The selected file could not be read.");
  });

  reader.readAsText(file);
}

function newPlanner() {
  const confirmed = window.confirm("Start a new planner with the starter events? Unsaved local changes will be replaced.");
  if (!confirmed) return;

  state.events = structuredClone(defaultEvents);
  state.selectedId = state.events[0]?.id ?? null;
  saveEvents();
  render();
  saveIndicator.textContent = "Started a new planner from the starter template";
}

function saveCurrentEventUpdates() {
  const event = getSelectedEvent();
  if (!event) return;

  saveEvents();
  saveIndicator.textContent = `Saved updates for ${event.title}`;
}

function printPlanner() {
  state.printMode = "planner";
  render();
  window.print();
}

function printSelectedEvent() {
  const event = getSelectedEvent();
  if (!event) return;

  state.printMode = "event";
  render();
  window.print();
}

function openEventModal() {
  addEventForm.reset();
  newEventFields.season.value = "Special Event";
  eventModal.classList.remove("hidden");
  newEventFields.title.focus();
}

function closeEventModal() {
  eventModal.classList.add("hidden");
  addEventButton.focus();
}

function createEventFromForm() {
  const title = newEventFields.title.value.trim();
  if (!title) return;

  const season = newEventFields.season.value.trim() || "Special Event";
  const id = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;

  const event = {
    id,
    title,
    season,
    archived: false,
    date: newEventFields.date.value,
    coordinator: newEventFields.coordinator.value.trim(),
    category: newEventFields.category.value.trim(),
    budget: newEventFields.budget.value,
    theme: newEventFields.theme.value.trim(),
    notes: newEventFields.notes.value.trim(),
    volunteers: "",
    supplies: "",
    checklist: createDefaultChecklist()
  };

  state.events.push(event);
  state.selectedId = event.id;
  saveEvents();
  render();
  closeEventModal();
}

function archiveSelectedEvent() {
  const event = getSelectedEvent();
  if (!event || event.archived) return;

  event.archived = true;
  saveEvents();
  render();
}

function restoreSelectedEvent() {
  const event = getSelectedEvent();
  if (!event || !event.archived) return;

  event.archived = false;
  saveEvents();
  render();
}

function deleteSelectedEvent() {
  const event = getSelectedEvent();
  if (!event) return;

  const confirmed = window.confirm(`Delete "${event.title}"? This cannot be undone.`);
  if (!confirmed) return;

  state.events = state.events.filter((item) => item.id !== event.id);
  state.selectedId = state.events[0]?.id ?? null;
  saveEvents();
  render();
}

Object.entries(formElements).forEach(([field, element]) => {
  element.addEventListener("input", () => {
    updateSelectedEvent(field, element.value);
  });
});

addEventButton.addEventListener("click", openEventModal);
archiveEventButton.addEventListener("click", archiveSelectedEvent);
restoreEventButton.addEventListener("click", restoreSelectedEvent);
deleteEventButton.addEventListener("click", deleteSelectedEvent);
saveUpdatesButton.addEventListener("click", saveCurrentEventUpdates);
newPlannerButton.addEventListener("click", newPlanner);
openPlannerButton.addEventListener("click", () => importDataInput.click());
savePlannerButton.addEventListener("click", exportEvents);
printPlannerButton.addEventListener("click", printPlanner);
printEventButton.addEventListener("click", printSelectedEvent);
importDataInput.addEventListener("change", () => {
  importEventsFromFile(importDataInput.files?.[0]);
});
closeEventModalButton.addEventListener("click", closeEventModal);
secondaryCancelEventModalButton.addEventListener("click", closeEventModal);
eventModalBackdrop.addEventListener("click", closeEventModal);

addEventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createEventFromForm();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !eventModal.classList.contains("hidden")) {
    closeEventModal();
  }
});

resetDataButton.addEventListener("click", () => {
  state.events = structuredClone(defaultEvents);
  state.selectedId = state.events[0]?.id ?? null;
  saveEvents();
  render();
  saveIndicator.textContent = "Reset to the starter events";
});

state.selectedId = state.events[0]?.id ?? null;
render();

window.addEventListener("afterprint", () => {
  state.printMode = "planner";
  render();
});

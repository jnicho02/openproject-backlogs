//-- copyright
// OpenProject Backlogs Plugin
//
// Copyright (C)2013-2014 the OpenProject Foundation (OPF)
// Copyright (C)2011 Stephan Eckardt, Tim Felgentreff, Marnen Laibow-Koser, Sandro Munda
// Copyright (C)2010-2011 friflaj
// Copyright (C)2010 Maxime Guilbot, Andrew Vit, Joakim Kolsjö, ibussieres, Daniel Passos, Jason Vasquez, jpic, Emiliano Heyns
// Copyright (C)2009-2010 Mark Maglana
// Copyright (C)2009 Joe Heck, Nate Lowrie
//
// This program is free software; you can redistribute it and/or modify it under
// the terms of the GNU General Public License version 3.
//
// OpenProject Backlogs is a derivative work based on ChiliProject Backlogs.
// The copyright follows:
// Copyright (C) 2010-2011 - Emiliano Heyns, Mark Maglana, friflaj
// Copyright (C) 2011 - Jens Ulferts, Gregor Schmidt - Finn GmbH - Berlin, Germany
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

RB.constants = {
  project_id: 1,
  sprint_id: 1
};

RB.i18n = {
  generating_graph: '<%= j l("backlogs.generating_chart").html_safe %>',
  burndown_graph: '<%= j l("backlogs.burndown_graph").html_safe %>'
};

RB.urlFor = (function () {
  var routes = {
    update_sprint: '<%= backlogs_project_sprint_path(:project_id => @project.identifier, :id => ":id") %>',

    create_story: '<%= backlogs_project_sprint_stories_path(:project_id => @project.identifier, :sprint_id => ":sprint_id") %>',
    update_story: '<%= backlogs_project_sprint_story_path(:project_id => @project.identifier, :sprint_id => ":sprint_id", :id => ":id") %>',

    create_task: '<%= backlogs_project_sprint_tasks_path(:project_id => @project.identifier, :sprint_id => ":sprint_id") %>',
    update_task: '<%= backlogs_project_sprint_task_path(:project_id => @project.identifier, :sprint_id => ":sprint_id", :id => ":id") %>',

    create_impediment: '<%= backlogs_project_sprint_impediments_path(:project_id => @project.identifier, :sprint_id => ":sprint_id") %>',
    update_impediment: '<%= backlogs_project_sprint_impediment_path(:project_id => @project.identifier, :sprint_id => ":sprint_id", :id => ":id") %>',

    show_burndown_chart: '<%= backlogs_project_sprint_burndown_chart_path(:project_id => @project.identifier, :sprint_id => ":sprint_id") %>'
  };

  return function (routeName, options) {
    route = routes[routeName];

    if (options){
      if (options.id) {
        route = route.replace(":id", options.id);
      }
      if (options.project_id){
        route = route.replace(":project_id", options.project_id);
      }
      if(options.sprint_id) {
        route = route.replace(":sprint_id", options.sprint_id)
      }
    }

    return route;
  }
}());

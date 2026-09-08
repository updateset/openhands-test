import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['d40715c78715e650ee0cb848cebb357a'],
    name: 'RSC - My Questionnaires',
    clientScript: Now.include('./sp_widget_rsc_my_questionnaires/client_script.js'),
    serverScript: Now.include('./sp_widget_rsc_my_questionnaires/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_rsc_my_questionnaires/template.html'),
    customCss: Now.include('./sp_widget_rsc_my_questionnaires/style.scss'),
    id: 'rsc_my_questionnaires',
    linkScript: Now.include('./sp_widget_rsc_my_questionnaires/link-script.js'),
    public: true,
    angularProviders: ['26da2ac147d5ae108d277d88c26d43c9'],
    templates: [
        {
            $id: '04ea9ecb8759e650ee0cb848cebb3576',
            id: 'questionnaire_table',
            htmlTemplate: `<!-- Table -->
<div class="row p-4">
  <div class="col-md-12">
    
    <!-- Table -->
    <table usa-table="standard" ng-if="c.total > 0">
      <caption class="usa-sr-only">List of Submitted Questionnaires</caption>
      <thead>
        <tr>
          <th data-sortable usa-table-sort="number" sort-data="c.data.tableItems" scope="col">
            Questionnaire ID</th>
          <th data-sortable usa-table-sort="submitted" sort-data="c.data.tableItems" scope="col">Submitted
          </th>
          <th data-sortable usa-table-sort="version" sort-data="c.data.tableItems" scope="col">Version</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="q in c.data.tableItems track by $index" ng-if="$index >= c.base && $index < c.top">
          <th usa-table-cell="number" scope="row">
            <usa-link href="rsc?id=rsc_questionnaire_summary&record={{q.id}}">
              {{q.number}}
            </usa-link>
          </th>
          <td usa-table-cell="submitted" data-type="date">{{q.submitted}}</td>
          <td usa-table-cell="version">{{q.version}}</td>
        </tr>
      </tbody>
    </table>

    <!-- No questionnaires -->
    <h2 class="template-h2 mt-4" ng-if="c.total == 0">
      You have not submitted any questionnaires
    </h2>

  </div>
</div>`,
        },
        {
            $id: '2b2b964f8759e650ee0cb848cebb35fc',
            id: 'questionnaire_pagination',
            htmlTemplate: `<!-- Pagination -->
<div class="row px-4 py-4">
    <div class="col-md-12">
        <usa-pagination-wrapper page="c.page">

            <usa-pagination-previous click="c.paginate(c.page - 1)" link="#page_previous" disabled="(c.page == 1)"
                img-src="uswds_navigate_before.svg" text="Previous"></usa-pagination-previous>

            <usa-pagination-item ng-repeat="tab in c.getNumber(c.pages) track by $index" ng-click="c.paginate($index + 1)" link="#page_{{$index +1}}"
                page-number="{{$index + 1}}"></usa-pagination-item>

            <usa-pagination-next click="c.paginate(c.page + 1)" link="#page_next" disabled="(c.page == c.pages)"
                img-src="uswds_navigate_next.svg" text="Next"></usa-pagination-next>

        </usa-pagination-wrapper>        
    </div>
</div>`,
        },
    ],
})

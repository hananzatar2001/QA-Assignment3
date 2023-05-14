//1-All Goals,Group filter all,Level filters all
describe('goals page', () => {

  /////////*************************************************////////////////
  //7-topic1-Goal1-hanan,Group-filter,Level-filters-all
  it('7-topic1-Goal1-hanan,Group-filter,Level-filters-all', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter hanan
    cy.get(
      '[style=" padding-right: 0px; padding-left: 20px; "] > div.panel-title > :nth-child(5)'
    ).click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
  });
  //8-topic3-QA-Goals,Group-filter,Level-filters-all
  it('8-topic3-Goals,Group-filter,Level-filters-all', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open;
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(11) > .custom-control-label').click();
    // Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
  });
  //  // //9-topic3-Goal3-Goals,Group-filter,Level-filters-all
  it('9-topic3-Goals,Group-filter,Level-filters-all', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter topic3-Goal3
    cy.get(':nth-child(12) > .custom-control-label').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
  });

  //10- All Goals,Group filter all,Level filters all Grade 10
  it('10-All Goals,Group filter all,Level filters all Grade 10', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('10');
  });
  //11-All Goals,Group filter all,Level filters all Grade 9
  it('11-All Goals,Group filter all,Level filters all Grade 9', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('9');
  });
  //12-All Goals,Group filter all,Level filters all Grade 8
  it('12-All Goals,Group filter all,Level filters all Grade 8', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('8');
  });
  //13-All Goals,Group filter all,Level filters all Grade 7
  it('13-All Goals,Group filter all,Level filters all Grade 7', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('7');
  });
  //14-All Goals,Group filter all,Level filters all Grade 6
  it('14-All Goals,Group filter all,Level filters all Grade 6', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('6');
  });
  //15-All Goals,Group filter all,Level filters all Grade 5
  it('15-All Goals,Group filter all,Level filters all Grade 5', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('5');
  });
  //16-All Goals,Group filter all,Level filters all Grade 4
  it('16-All Goals,Group filter all,Level filters all Grade 4', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('4');
  });
  //17-All Goals,Group filter all,Level filters all Grade 3
  it('17-All Goals,Group filter all,Level filters all Grade 3', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('3');
  });
  //18-All Goals,Group filter all,Level filters all Grade 2
  it('18-All Goals,Group filter all,Level filters all Grade 2', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('2');
  });
  //19-All Goals,Group filter all,Level filters all Grade 1
  it('19-All Goals,Group filter all,Level filters all Grade 1', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('1');
  });
  //20-All Goals,Group filter all,Level filters all Grade 0
  it('20-All Goals,Group filter all,Level filters all Grade 0', function () {
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HananZatar');
    cy.get('#id_password').type('hanan@1@0123');
    cy.get(':nth-child(4) > div > .form-control').select('staff');
    cy.get('.btn').click();
    cy.get('.fas').should('exist');
    //open
    cy.get(
      ':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link'
    ).click();
    //Goal page
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    //Goal Filter
    cy.get(':nth-child(1) > .custom-control-label > h5').click();
    //Group filter all
    cy.get(
      '[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1)'
    ).click();
    //Apply filters
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    //Grade select 10
    cy.get(':nth-child(6) > .form-control').select('0');
  });
});

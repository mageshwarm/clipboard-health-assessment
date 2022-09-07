Ticket 1:
IN ORDER TO enable Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

AS A Database Developer
I WANT to add new column (custom_agent_id) in Agent table
WHEREAS NOW currently it has internal database id only.
AC:
GIVEN There is function in backend system to add custom agent id
WHEN backend api trying to insert custom agent id into Agent table
THEN Agent table capable to having that.

============================================================
Ticket 2:
IN ORDER TO enable Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

AS A Backend Developer
I WANT to create or update API to insert custom agent id in Agent table.
WHEREAS NOW currently API fetch internal database id only.
AC 1:
GIVEN UI team have field to add or update custom agent id
WHEN Facilities tries to insert custom agent id through UI
THEN backend system should able to insert that id into respestive table.
AC 2:
GIVEN Agent table has values for custom agent id
WHEN Facilities tries to generate report
THEN backend system should able to fetch that custom id into respestive agents. If agent doesnt have custom agent id, then we should return internal agent id or placeholder.

============================================================
Ticket 3: (APPLICABLE ONLY IF WE HAVE UI)
IN ORDER TO enable Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

AS A Frontend Developer 
I WANT to create or add "Custom Agent ID" field to agent detail page
WHEREAS NOW currently Page contains ID with internal database id only.
AC 1:
GIVEN UI team have field to add or update custom agent id
WHEN Facilities tries to insert custom agent id through UI
THEN Frontend should call respective backend API to insert that value into DB.

============================================================
Ticket 3: (APPLICABLE ONLY IF WE HAVE UI)
IN ORDER TO enable Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

AS A QA TEAM 
I WANT to test functionality of new feature 
WHEREAS NOW currently Page contains ID with internal database id only.
AC 1:
1. UI should enabled with option to create or add "Custom Agent ID" field to agent detail page
2. Backend capable of adding or updating custom agent id into Agent table
3. Agent table have custom_agent_id field
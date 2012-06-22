
$(document).ready(function(){
	
	var gCustomSearch = $("#search-results").gCustomSearch({
		key: "AIzaSyCYGWmu2NiPrkjMG3P5Wnrxa2OqEX2H8G0",
		cx: "008629424053459118878:fhauvc0gbks",
		paginationTmpl: "#pagination-tmpl"
	}, function(){
		$("#totalResults").text(gCustomSearch.getTotalResults());
		$("#theQuery").text(gCustomSearch.getQuery());
		$("#crono").text(gCustomSearch.getCrono());
		$("#resultsFrom").text(gCustomSearch.getResultsFrom());
		$("#resultsTo").text(gCustomSearch.getResultsTo());
		gCustomSearch.applyPagination($("#pagination"));
	});
	
});
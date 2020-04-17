<!--This code embeds PDF files into a Zendesk Guide article. Each uploaded file is embedded into a PDF -->
<!--If PDF does not work https://chrome.google.com/webstore/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm?hl=en -->

<section class="article-info">
	<div class="article-attachments">
		<ul class="attachments">
		{{#each attachments}}
			<embed src="{{url}}" type="application/pdf" width="100%" height="600px" />
			<li class="attachment-item">
				<a href="{{url}}" target="_blank">{{name}}</a>
				<div class="attachment-meta meta-group">
					<span class="attachment-meta-item meta-data">{{size}}</span>
					<a href="{{url}}" target="_blank" class="attachment-meta-item meta-data">Download</a>
				</div>
			</li>
		{{/each}}
		</ul>
	</div>
</section>	
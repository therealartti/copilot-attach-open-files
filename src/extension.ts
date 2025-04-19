import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('copilot-attach-open-files.attachOpenFiles', async () => {
    const allTabs = vscode.window.tabGroups.all.flatMap(group => group.tabs);
    const uris = allTabs
      .map(tab => (tab.input as any).uri as vscode.Uri)
      .filter(uri => uri && (uri.scheme === 'file' || uri.scheme === 'vscode-remote'));
  
    if (uris.length === 0) {
      vscode.window.showInformationMessage('No open file tabs to attach.');
      return;
    }
  
    try {
      for (const uri of uris) {
        await vscode.commands.executeCommand('github.copilot.chat.attachFile', uri);
      }
      vscode.window.showInformationMessage(`Attached ${uris.length} file(s) to Copilot Chat.`);
    } catch (error) {
      vscode.window.showErrorMessage(`Failed to attach files: ${error}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

